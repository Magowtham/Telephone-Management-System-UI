import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import UserInfoTable from "./UserInfoTable";
import RechargeHistory from "./RechargeHistory";
import ExpenseHistory from "./ExpenseHistory";
import UserForm from "./UserForm";
import "../CSS/HomePage.css";
import "../CSS/ButtonLoader.css";
import "../CSS/HomeNotification.css";
import "../CSS/SideNavigation.css";
import "../CSS/FormLoader.css";

function HomePage() {
  const navigate = useNavigate();
  const authToken=sessionStorage.getItem("auth_token");
  const [reductionStatus,setReductionStatus]=useState(false);
  const [isAddUserBtnClicked,setIsAddUserBtnClicked]=useState(false)
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRefresh, setSearchRefresh] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [initialRefresh, setInitialRefresh] = useState(true);
  const [searchInputClear, setSearchInputClear] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  const [aborter,setAborter]=useState(null);

  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isCalender, setIsCalender] = useState(false);
  const [isStartDateClicked, setIsStartDateClicked] = useState(false);
  const [isMonthlyButtonClicked, setIsMonthlyButtonClicked] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationError, setNotificationError] = useState("");
  const [downloadData, setDownloadData] = useState({
    startDate: "",
    endDate: "",
  });
  const [isDownloadValidted, setIsDownloadValidted] = useState(false);
  const [isRehchargeDownloading, setIsRechargeDownloading] = useState(false);
  const [refreshUserInfoTable, setRefreshUserInfoTable] = useState(false);
  const [refreshRechargeTable, setRefreshRechargeTable] = useState(false);
  const [refreshExpenseTable, setRefreshExpenseTable] = useState(false);
  const [navigation, setNavigation] = useState(1);
  const searchInputRef = useRef(null);
  const startButtonRef = useRef(null);
  const endButtonDateRef = useRef(null);
  const dailyRechargeDownloadButtonRef = useRef(null);
  const searchUser = async (query) => {
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
    if (!specialCharacterPattern.test(query)) {
      try {
        setIsSearchLoading(true);
        aborter?.abort()
        const abortController = new AbortController();
        setAborter(abortController);
        const result = await fetch(
          `${process.env.REACT_APP_API_URL}/search_user?query=${query}`,
          {
            method: "GET",
            signal: abortController.signal,
            headers:{
              "Authorisation":`Bearer ${authToken}`
            }
          }
        );
        const data = await result.json();
        setIsSearchLoading(false);
        switch (result.status) {
          case 200:
            setSearchData(data.users);
            break;
          case 404:
            setSearchData([]);
            break;
          default:
            alert(data.error);
        }
      } catch (error) {
        if(error.name!=="AbortError"){
          setIsSearchLoading(false)
          alert("check your internet connection!")
        }
      }
    }
  };

  const handleAddUser = () => {
    setIsAddUserBtnClicked(true)
    setIsOverlay(true)
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && !formLoading && !isRehchargeDownloading) {
      setIsAddUserBtnClicked(false)
      setIsOverlay(false);
      setIsMonthlyButtonClicked(false);
      setIsCalender(false);
      setIsNotificationOpen(false);
    }
  };
  const handleOverlay = () => {
    if (!formLoading && !isRehchargeDownloading) {
      setIsAddUserBtnClicked(false)
      setIsOverlay(false);
      setIsMonthlyButtonClicked(false);
      setIsCalender(false);
      setIsNotificationOpen(false);
    }
  };

  const handleLogout = async () => {
    sessionStorage.removeItem("auth_token");
    navigate("/login")
  };
 
  const closeNotification = () => {
    setIsNotificationOpen(false);
    setIsCalender(false);
  };
  const handleDailyRechargeDownload = async () => {
    const currentDate = new Date();
    const button = dailyRechargeDownloadButtonRef.current;
    const startDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    const endDate = `${nextDay.getDate()}/${
      nextDay.getMonth() + 1
    }/${nextDay.getFullYear()}`;
    try {
      setIsButtonLoading(true);
      button.disabled = true;
      const result = await fetch(
        `${
          process.env.REACT_APP_API_URL
        }/download_recharge_history?reductionStatus=${
          reductionStatus ? 1 : 0
        }&startDate=${startDate}&endDate=${endDate}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Accept": "application/pdf",
            "Authorisation":`Bearer ${authToken}`
          },
      
        }
      );
      switch (result.status) {
        case 200:
          const blob = await result.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "recharge.pdf";
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
          break;
        case 401:
          navigate("/login");
          break;
        default:
          const data = await result.json();
          alert(data.error);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsButtonLoading(false);
      button.disabled = false;
    }
  };
  const handleMonthChange = (state) => {
    const currentDate = date;
    const days = [];
    currentDate.setMonth(
      state ? currentDate.getMonth() + 1 : currentDate.getMonth() - 1
    );
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(day);
    }
    setDays(days);
    setDate(currentDate);
    setMonth(currentDate.getMonth() + 1);
    setYear(currentDate.getFullYear());
  };
  const handleDateClick = (dateState) => {
    const currentDate = date;
    const days = [];
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(day);
    }
    setDays(days);
    setMonth(currentDate.getMonth() + 1);
    setYear(currentDate.getFullYear());

    if (dateState) {
      setIsStartDateClicked(true);
    } else {
      setIsStartDateClicked(false);
    }
    setIsCalender(!isCalender);
  };
  const handleDayClick = (index) => {
    if (isStartDateClicked) {
      setDownloadData({ startDate: `${index}/${month}/${year}`, endDate: "" });
      startButtonRef.current.textContent = `Start Date: ${index}/${month}/${year}`;
    } else {
      if (!downloadData.startDate) {
        setNotificationError("Please select start date first");
        setIsNotificationOpen(true);
        return;
      }
      setDownloadData({
        startDate: downloadData.startDate,
        endDate: `${index}/${month}/${year}`,
      });
      const startDateArray = downloadData.startDate.split("/");
      const startDate = new Date(
        startDateArray[2],
        startDateArray[1] - 1,
        startDateArray[0]
      );
      const endDate = new Date(year, month - 1, index);
      if (+startDate >= +endDate) {
        setNotificationError("End date should be greaterthan start date");
        setIsNotificationOpen(true);
        return;
      }
      setNotificationError("");
      setIsNotificationOpen(false);
      setDownloadData({
        startDate: downloadData.startDate,
        endDate: `${index}/${month}/${year}`,
      });
      endButtonDateRef.current.textContent = `End Date: ${index}/${month}/${year}`;
    }
    setIsCalender(false);
  };
  const handleMonthlyRechargeDownload = () => {
    setIsNotificationOpen(false);
    if (!downloadData.startDate) {
      setNotificationError("Start date is required");
      setIsNotificationOpen(true);
      return;
    }
    if (!downloadData.endDate) {
      setNotificationError("End date is required");
      setIsNotificationOpen(true);
      return;
    }
    if (!notificationError) {
      setIsDownloadValidted(true);
    }
  };

 
  useEffect(() => {
    if (searchQuery) {
      searchUser(searchQuery);
      setSearchRefresh(false);
      setInitialRefresh(false);
    } else {
      setSearchRefresh(true);
    }
  }, [searchQuery]);
  useEffect(() => {
    if (searchInputClear) {
      searchInputRef.current.value = "";
      setSearchInputClear(false);
    }
  }, [searchInputClear]);


  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (isDownloadValidted) {
      (async () => {
        try {
          setIsRechargeDownloading(true);
          const result = await fetch(
            `${
              process.env.REACT_APP_API_URL
            }/download_recharge_history?reductionStatus=${
              reductionStatus ? 1 : 0
            }&startDate=${downloadData.startDate}&endDate=${
              downloadData.endDate
            }`,
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Accept": "application/pdf",
                "Authorisation":`Bearer ${authToken}`
              },
            }
          );

          switch (result.status) {
            case 200:
              const blob = await result.blob();
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "recharge.pdf";
              a.click();
              a.remove();
              window.URL.revokeObjectURL(url);
              break;
            case 401:
              await handleLogout();
              break;
            case 500:
              const data = await result.json();
              setIsNotificationOpen(true);
              setNotificationError(data.error);
          }
        } catch (error) {
          alert("check your internet connection");
        } finally {
          setIsDownloadValidted(false);
          setIsRechargeDownloading(false);
          setIsMonthlyButtonClicked(false);
          setIsOverlay(false);
        }
      })();
    }
  }, [isDownloadValidted]);
  useEffect(()=>{
const autoLogin=async ()=>{
  try{
    const response=await fetch(`${process.env.REACT_APP_ADMIN_URL}/auto_login`,{
      method:"GET",
      headers:{
        "Authorisation":`Bearer ${authToken}`
      }
    })
    const result=await response.json();
    switch(response.status){
      case 200:
        setReductionStatus(result.reductionStatus)
        break;
        default:
          navigate("/login")
    }
  }catch(error){
    console.log(error.name)
  }

 }
 autoLogin()
  },[])
  return (
    <>
    <UserForm isVisible={isAddUserBtnClicked} isOverlay={isOverlay} editData={null} authToken={authToken} setFormLoading={setFormLoading}/>
      <div
        className={`overlay ${isOverlay ? `open` : ``}`}
        onClick={handleOverlay}
      ></div>
      <div className="home-page-container">
        <div
          className={`home-notification ${isNotificationOpen ? `show` : ``}`}
        >
          <p>{notificationError}</p>
          <button onClick={closeNotification}>
            <img src="/Icons/close.png" alt="" />
          </button>
        </div>
        <nav>
          <div className="nav-heading-sec">
            <h1>Vsense Technologies</h1>
          </div>
          <div className="search-bar-sec">
            <div className="search-bar">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button>Search</button>
            </div>
          </div>
        </nav>
        <div className="side-nvigation-sec">
          <button
            className={`${navigation === 1 ? `selected` : ``}`}
            onClick={() => {
              setSearchRefresh(true);
              setSearchInputClear(true);
              navigate("/");
            }}
          >
            <img src="/Icons/home.png" alt="" />
          </button>
          <button className={`${navigation !== 1 ? `selected` : ``}`}>
            <img src="/Icons/history.png" alt="" />
          </button>
          <button
            onClick={() => {
              setSearchRefresh(true);
              setSearchInputClear(true);
              switch (navigation) {
                case 1:
                  setRefreshUserInfoTable(true);
                  break;
                case 2:
                  setRefreshRechargeTable(true);
                  break;
                case 3:
                  setRefreshExpenseTable(true);
              }
            }}
          >
            <img src="/Icons/refresh_black.png" alt="" />
          </button>
        </div>
        <div className="user-table-sec">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <UserInfoTable
                  reductionStatus={reductionStatus}
                  isSearchLoading={isSearchLoading}
                  searchData={searchData}
                  searchRefresh={searchRefresh}
                  initialRefresh={initialRefresh}
                  inputClear={setSearchInputClear}
                  isOverlay={isOverlay}
                  setIsOverlay={setIsOverlay}
                  setNavigation={setNavigation}
                  refreshUserInfoTable={refreshUserInfoTable}
                  setRefreshUserInfoTable={setRefreshUserInfoTable}
                  handleLogout={handleLogout}
                  isAddUserBtnClicked={isAddUserBtnClicked}
                  isMonthlyButtonClicked={isMonthlyButtonClicked}
                  authToken={authToken}
                  setFormLoading={setFormLoading}
                />
              }
            />
            <Route
              path="/recharge_history"
              element={
                <RechargeHistory
                  reductionStatus={reductionStatus}
                  setNavigation={setNavigation}
                  refreshRechargeTable={refreshRechargeTable}
                  setRefreshRechargeTable={setRefreshRechargeTable}
                  authToken={authToken}
                />
              }
            />
            <Route
              path="/expense_history"
              element={
                <ExpenseHistory
                  setNavigation={setNavigation}
                  refreshExpenseTable={refreshExpenseTable}
                  setRefreshExpenseTable={setRefreshExpenseTable}
                  authToken={authToken}
                />
              }
            />
          </Routes>
        </div>
        <div className="footer-sec">
          <button
            className={`daily-history-btn button-loading`}
            onClick={handleDailyRechargeDownload}
            ref={dailyRechargeDownloadButtonRef}
          >
            Daily Recharge History
            <div
              className="button_loader-container"
              style={{ opacity: `${isButtonLoading ? `1` : `0`}` }}
            >
              <div className="button_any-element button_animation button_is_loading"></div>
            </div>
            <img
              src="/Icons/download.png"
              alt=""
              style={{ opacity: `${isButtonLoading ? `0` : `1`}` }}
            />
          </button>
          <button
            className="monthly-history-btn"
            onClick={() => {
              setDate(new Date());
              startButtonRef.current.textContent = "Select Start Date";
              endButtonDateRef.current.textContent = "Select End Date";
              setDownloadData({ startDate: "", endDate: "" });
              setIsMonthlyButtonClicked(true);
              setIsOverlay(true);
            }}
          >
            Recharge History
            <img src="/Icons/download.png" alt="" />
          </button>
          <button onClick={handleAddUser} className="add-user-btn">
            Add New User
            <img src="/Icons/add.png" alt="" />
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout
            <img src="/Icons/logout.png" alt="" />
          </button>
        </div>
        <div
          className={`recharge-download-form ${
            isMonthlyButtonClicked ? `show` : ``
          }`}
        >
          <div
            className={`form-overlay ${isRehchargeDownloading ? `open` : ``}`}
          ></div>
          <div
            className={`progress-bar ${isRehchargeDownloading ? `open` : ``}`}
          >
            <div className="progress-bar-value"></div>
          </div>
          <h1>Recharge History</h1>
          <button
            onClick={() => {
              handleDateClick(true);
            }}
            ref={startButtonRef}
          >
            Select Start Date
          </button>
          <button
            onClick={() => {
              handleDateClick(false);
            }}
            ref={endButtonDateRef}
          >
            Select End Date
          </button>
          <button onClick={handleMonthlyRechargeDownload}>
            Download
            <img src="/Icons/download.png" alt="" />
          </button>
          <div className={`calender-container ${isCalender ? `show` : ``}`}>
            <div className="calender-header">
              <button
                onClick={() => {
                  handleMonthChange(false);
                }}
              >
                <img src="/Icons/prev.png" alt="" />
              </button>
              <h1>{`${month}-${year}`}</h1>
              <button
                onClick={() => {
                  handleMonthChange(true);
                }}
              >
                <img src="/Icons/next.png" alt="" />
              </button>
            </div>
            <div className="calender-days-container">
              {days.map((day, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleDayClick(index + 1);
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
