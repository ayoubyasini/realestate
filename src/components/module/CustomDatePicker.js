import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from 'react-date-object/locales/persian_fa';
import styles from "./customDatePicker.module.css";


function CustomDatePicker({profileData,setProfileData}) {
    const {constructionDate} = profileData;
    const changeHandler = (e) => {
        const date = new Date(e);
        setProfileData({...profileData, constructionDate: date})
    }
  return (
    <div className={styles.container}>
        <p>تاریخ ساخت</p>
        <DatePicker calendar={persian} locale={persian_fa} value={constructionDate} onChange={changeHandler} calendarPosition="bottom-right"/>
    </div>
  )
}

export default CustomDatePicker;