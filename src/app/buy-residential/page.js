import BuyResidentialsPage from "@/public/components/template/BuyResidentialsPage"

async function BuyResidential({searchParams}) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if(data.error) {
    return <h3>مشکلی پیش آمده</h3>
  }

  let finalData = data.data;
  if(searchParams.category) {
    finalData = finalData.filter(i => i.category === searchParams.category)
  }
  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidential