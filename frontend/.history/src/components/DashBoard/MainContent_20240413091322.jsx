import Card from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] w-[55%]">
          <Card>
            <h2 className="">Overview</h2>
          </Card>
          <Card>
            <p>Hii</p>{" "}
          </Card>
        </div>

        <Card className="w-[40%]"> Hii </Card>
      </div>

      <div className="flex w-full justify-between">
        <Card className="w-[55%]">Hii</Card>

        <Card className="w-[40%]">Hii</Card>
      </div>
    </div>
  );
};

const Item = ({ amount, title }) => {};

export default MainContent;
