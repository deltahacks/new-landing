import logoImage from "../../public/logo.svg";
import mlh_logo from "../../public/mlh-logo.svg";
import clouds from "../../public/Clouds.png";
import { readFile, utils, writeFile } from 'xlsx';

const Intro = () => {
  const loadUrl = ()=>{
    const file = "test.xlsx";
    const reader = new FileReader();
    const wb = readFile('test.xlsx');
    const sheets = wb.SheetNames;
    console.log(wb)
    if (sheets.length) {
        console.log(sheets)
        const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
    }
    const fileNameBlob = new Blob([file], { type : 'plain/text' });
    reader.readAsArrayBuffer(fileNameBlob);
  }
  return (
    <>
      <div className="relative flex items-center justify-center flex-col font-minecraft px-14 pt-32 md:pt-0 min-h-fit sm:min-h-screen">
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={clouds} alt="clouds" />
        </div>
        <div className="z-10">
          <img src={logoImage} className="w-full h-full z-10" alt="logo" />
          {/*<div className="flex justify-center align-center md:flex-row md:justify-end md:items-center p-1">*/}
          <img
            src={mlh_logo}
            className="absolute w-auto -translate-x-1/2 h-16 md:h-32 right-20 lg:right-32 xl:right-64"
          />
          {/*</div>*/}
        </div>
        <div className="text-4xl font-bold mb-5"></div>
        <div className="flex flex-col items-center justify-center font-normal text-lg leading-9 tracking-wider z-10">
          <p className=" text-center  text-white ">
            <span className="text-shadow">JANUARY 13-15, 2023</span>
          </p>
          <p className=" text-center  text-white">
            <span className="text-shadow">IN-PERSON</span>
          </p>
          <p className=" text-center  text-white">
            <span className="text-shadow">You can view our schedule <button onClick={loadUrl}>here</button></span>
          </p>
        </div>
        <div className="w-100 h-4/5 mx-auto">
          <a
            href="https://portal.deltahacks.com/"
            className="text-white text-center text-xl md:text-3xl tracking-wider "
          >
            <span className="flex flex-col items-center  w-100 h-100 mt-10">
              <span className="mBG px-12 py-2 md:px-20 md:py-5 mt-3 h-[auto!important] absolute z-50">
                APPLY NOW
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
