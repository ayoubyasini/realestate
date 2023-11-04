"use client";

import RadioList from "../module/RadioList";
import TextInput from "../module/TextInput";
import TextList from "../module/TextList";
import styles from "./AddProfilePage.module.css";
import { useState } from "react";

function AddProfilePage() {
   const [profileData,setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = () => {
    console.log(profileData)
  }

  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput 
        title="متن آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
       <TextInput 
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
         <TextInput 
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
        <TextInput 
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
        <TextInput 
        title="(تومان)قیمت"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
        <TextInput 
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData}/>
      <TextList 
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList 
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
    </div>
  )
}

export default AddProfilePage