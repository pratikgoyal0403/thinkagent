import Card from "../Commons/Card/Card";

const HelpCardComponent = () => {
  return (
    <div className=" w-full py-6 ">
      <div className="w-1/2 mx-auto grid grid-cols-4 gap-4">
        <Card title="Resource" src="/logo192.png" />
        <Card title="Contact information" src="/logo192.png" />
        <Card title="Email Support " src="/logo192.png" />
        <Card title="Phone Support " src="/logo192.png" />
        <Card title="FAQ" src="/logo192.png" />
        <Card title="Feedback" src="/logo192.png" />
        {/* <Card title="react js" src="/logo192.png" />
        <Card title="react js" src="/logo192.png" /> */}
      </div>
    </div>
  );
};

export default HelpCardComponent;
