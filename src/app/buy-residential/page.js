import BuyResidentialsPage from "@/public/components/template/BuyResidentialsPage"
import connectDB from "@/public/utils/connectDB";
import Profile from "../../models/Profile";

async function BuyResidential({searchParams}) {
  // const res = await fetch("http://localhost:3000/api/profile", {
  //   cache: "no-store",
  // });
  // const data = await res.json();
  await connectDB();
  const profile = await Profile.find();
  console.log(profile)

  if(profile.error) {
    return <h3>مشکلی پیش آمده</h3>
  }

  let finalData = profile;
  if(searchParams.category) {
    finalData = finalData.filter(i => i.category === searchParams.category)
  }
  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidential