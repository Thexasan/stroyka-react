import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swipper from "./components/swipper/swipper";
import Stroyka from "./components/Stroyka/Stroyka";
import Button2 from "./components/Swipper/Button/Button2";
import Button3 from "./components/Swipper/Button/Button3";
import Stroyka2 from "./components/Stroyka/Stroyka2";

import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
const { confirm } = Modal;

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import logo from "./assets/logo.svg";
import zavod from "./assets/Rectangle.png";
import truck1 from "./assets/Screen Shot 2023-06-24 at 19.54.16 копия.png";
import truck2 from "./assets/Screen Shot 2023-06-24 at 19.55.33 копия.png";
import truck3 from "./assets/Screen Shot 2023-06-24 at 19.55.46 копия.png";
import truck4 from "./assets/Screen Shot 2023-06-24 at 19.55.58 копия.png";
import truck5 from "./assets/Screen Shot 2023-06-24 at 19.56.11 копия.png";
import svg from "./assets/Frame.svg";
import img from "./assets/Rectangle copy.png";
import img2 from "./assets/Rectangle copy 2.png";
import img3 from "./assets/Rectangle44.svg";
import img4 from "./assets/Rectangle copy 2.svg";
import img5 from "./assets/Rectangle copy 3.svg";
import img6 from "./assets/Rectangle copy.svg";
import img7 from "./assets/Rectangle.svg";
import img8 from "./assets/Rectangle copy 4.svg";
import img10 from "./assets/Rectangle copy 3.png";
import img11 from "./assets/Rectangle copy 4.png";
import img12 from "./assets/Rectangle copy 5.png";
import frame from "./assets/Frame copy.svg";
import vector from "./assets/Vector.svg";
import frame2 from "./assets/Frame copy 2.svg";
import frame3 from "./assets/Frame copy 3.svg";
import frame4 from "./assets/Frame copy 4.svg";
import frame5 from "./assets/Frame copy 5.svg";
import krug from "./assets/Rectangle copy 5.svg";
import tel from "./assets/Rectangle copy 6.png";
import frame6 from "./assets/Frame copy 6.svg";
import key from "./assets/Key suppliers engaged.svg";
import key2 from "./assets/comcom.svg";
import ti from "./assets/Rectangle copy 7.png";
import Title from "./components/Title/Title";
import group from "./assets/Group 43.svg";
import group2 from "./assets/Group 46.svg";
import group3 from "./assets/Group 49.svg";
import group4 from "./assets/Group 52.svg";
import znak from "./assets/Frame copy 7.svg";
import ava from "./assets/Rectangle copy 6.svg";
import klick from "./assets/Great potential 1.svg";
import planet from "./assets/Frame copy 8.svg";
import planet2 from "./assets/Frame copy 9.svg";
import surat from "./assets/Rectangle copy 7.svg";
import surat2 from "./assets/Rectangle copy 8.svg";
import surat3 from "./assets/Rectangle copy 9.svg";
import surat4 from "./assets/Rectangle copy 10.svg";
import book from "./assets/facebook.svg";
import LongMenu from "./components/Bar/Navbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const API = "http://localhost:4000/stroyka";

  useEffect(() => {
    AOS.init();
  }, [])

  const {t,i18n} = useTranslation()
  const changeLanguage =(language)=>{
    i18n.changeLanguage(language)
  }


  const [todos, setTodos] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const [user, setUser] = useState("");
  const [user2, setUser2] = useState("");
  const [modal, setModal] = useState(false);
  const [idx, setIdx] = useState(null);

  const handleOpen = (elem) => {
    setModal(true);
    setIdx(elem.id);
    setUser(elem.title);
    setUser2(elem.desc);
  };

  const handleClick = () => {
    setModal(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  function addTodo(){
   let newObj = {
      id: new Date().getTime(),
      title: text,
      desc: desc,
      complete: false,
    };
    setTodos([...todos, newObj]);
    handleClose()
    setText("")
    setDesc("")
  }

 function complteTodo (id){
  let ar = todos.map((el)=>{
    if(el.id == id){
      el.complete =!el.complete
    }
    return el
  })
  setTodos(ar)
 }

  // const editTodo = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let obj = {
  //       title: user,
  //       desc: user2,
  //       complete: false,
  //     };
  //     let { data } = await axios.put(`${API}/${idx}`, obj);
  //     getTodos();
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   handleClick();
  // };

  function editTodo(){
    let ar = todos.map((e)=>{
      if(e.id == idx){
        e.title  = user
        e.desc = user2
      }
      return e
    })
    setTodos(ar)
    handleClick();


  }

  return (
    <div className="dark:bg-[#212B31]">
      <header className="max-w-[100%]">
        <div className="container">
          <nav className="flex lg:flex-col xl:flex-row justify-between items-center h-[80px]">
            <div>
              <img src={logo} className="cursor-pointer dark:bg-white " alt="logo" />
            </div>
            <div className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      </div>
      <select className="dark:bg-black dark:text-[#FFFF]" onChange={(e)=>changeLanguage((e.target.value))}>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
     
            <ul  className=" animate__animated animate__fadeInLeft gap-[30px] hidden lg:flex items-center">
              <li className="hover:text-[#036FC7]  dark:text-white dark:hover:text-black">{t("main")}</li>
              <li className="hover:text-[#036FC7] dark:text-white dark:hover:text-black">{t("about")}</li>
              <li className="hover:text-[#036FC7] lg:hidden 2xl:block dark:text-white dark:hover:text-black">{t("production")}</li>
              <li className="hover:text-[#036FC7] lg:hidden xl:block dark:text-white dark:hover:text-black">{t("process")}</li>
              <li className="hover:text-[#036FC7] lg:hidden 2xl:block dark:text-white dark:hover:text-black">{t("reliability")}</li>
              <li className="hover:text-[#036FC7] dark:text-white dark:hover:text-black">{t("client")}</li>
              <li className="hover:text-[#036FC7]  dark:text-white dark:hover:text-black">{t("contact")}</li>
              <Button2
                className="text-[15px] text-[#FFFFFF] bg-[#212B31] py-[9px] px-[20px] rounded shadow-md"
                btn={t("request")}
              />
            </ul>
            <div className=" text-center">
              <LongMenu/>
            </div>
          </nav>
          <div className="text-center w-auto lg:w-[70%] m-auto pt-[30px] sm:pt-[100px]">
            <h1 className="sm:text-[48px] text-[24px] font-[400] text-[#212B31] dark:text-[#FEFEFE]">
             {t("dostavka")}
            </h1>
            <div className="flex gap-[30px] justify-center items-center my-[30px]">
              <Button2
                className="sm:text-[17px]  text-[#FFFFFF] bg-[#212B31] py-[10px] px-[20px] rounded shadow-md"
                btn={t("request")}
              />
              <button className=" sm:text-[18px] text-[#212B31] dark:text-[#fefefe] border rounded py-[7px] px-[20px]">
                {t("more")}
              </button>
            </div>
          </div>
          <div className="flex justify-center py-[80px]">
            <img className="shadow-custom dark:bg-slate-400" src={zavod} alt="zavod" />
          </div>
          <div className="flex flex-wrap items-center justify-between ">
            <img className="hidden md:block" src={truck1} alt="" />
            <img className="hidden md:block" src={truck2} alt="" />
            <img className="hidden md:block" src={truck3} alt="" />
            <img className="hidden md:block" src={truck4} alt="" />
            <img className="hidden md:block" src={truck5} alt="" />
          </div>
        </div>
      </header>

      <section className="max-w-[100%] my-[40px] md:my-[100px]">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center md:items-start justify-around">
            <Stroyka
              img={svg}
              text1={t("text1")}
              text2={t("text2")}
            />
            <Stroyka
              img={svg}
              text1={t("text1")}
              text2={t("text2")}
            />
            <Stroyka
              img={svg}
              text1={t("text1")}
              text2={t("text2")}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[100%]">
        <div className="container">
          <div className="text-center w-auto md:w-[70%] m-auto">
            <h1 className="text-[32px] text-[#212B31] dark:text-white">
              {t("xaos")}
            </h1>
            <p className="text-[20px] text-[#72787D]">
             {t("xaos2")}
            </p>
          </div>
          <div data-aos="fade-up-left" className="flex justify-center  py-[20px]">
            <img className="dark:bg-slate-400" src={img} alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="text-center w-auto md:w-[65%] m-auto">
            <h1 className="text-[32px] text-[#212B31] dark:text-white">
             {t("pora")}
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col justify-around py-[100px] items-center border-b-[2px] ">
            <div className="w-auto text-center lg:text-start m-auto lg:m-0 lg:w-[45%]">
              <h1 className="text-[32px] text-[#212B31] dark:text-white">
                {t("people")}
              </h1>
              <p className="text-[20px] text-[#72787D] py-[20px]">
               {t("knowledge")}
              </p>
              <a className="text-[#212B31] dark:text-white border-b-[3px] border-yellow-500 text-[20px]">
                {t("help")}{" "}
              </a>
            </div>
            <div className="lg:py-0 py-[30px]">
              <img className="dark:bg-slate-400" src={img2} alt="" />
            </div>
          </div>
          <div className="py-[40px] border-b-[2px] border">
            <Swipper
              Img={img3}
              Img2={img4}
              Img3={img5}
              Img4={img6}
              Img5={img7}
              Img6={img8}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[100%] py-[80px] ">
        <div className="container">
          <div className="text-center w-auto lg:w-[70%] m-auto">
            <h1 className="text-[32px] text-[#212B31] dark:text-white">
             {t("stroy")}
            </h1>
            <p className="text-[20px] text-[#72787D]">
              {t("sistem")}
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-around items-center py-[30px]">
            <div className="w-auto lg:w-[35%] ">
              <h1 className="text-[18px] text-[#212B31] dark:text-white">
                {t("stavok")}
              </h1>
              <p className="text-[16px] text-[#72787D] py-[20px]">
                {t("stavok2")}
              </p>
            </div>
            <div>
              <img className="dark:bg-slate-400" src={img10} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse justify-around items-center py-[30px]">
            <div className="w-auto lg:w-[40%] ">
              <h1 className="text-[18px] text-[#212B31] dark:text-white">
                {t("mesto")}
              </h1>
              <p className="text-[16px] text-[#72787D] py-[10px] lg:py-[20px]">
                {t("mesto2")}
              </p>
            </div>
            <div>
              <img className="dark:bg-slate-400" src={img11} alt="" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-around items-center py-[30px]">
            <div className="w-auto lg:w-[45%] ">
              <h1 className="text-[18px] text-[#212B31] dark:text-white">
                {t("mesto3")}{" "}
              </h1>
              <p className="text-[16px] text-[#72787D] py-[20px]">
                {t("mesto4")}
              </p>
            </div>
            <div>
              <img className="dark:bg-slate-400" src={img12} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] py-[100px]">
        <div className="container">
          <div className="w-auto lg:w-[70%] m-auto text-center">
            <h1 className="text-[32px] text-[#212B31] dark:text-white">{t("stala")}</h1>
            <p className="text-[20px] text-[#72787D]">
             {t("stala2")}
            </p>
          </div>
          <div className="text-center mt-[30px]">
            <div>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
                className="text-green-500 border border-green-400"
              >
                {t("add")}
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{t("new")}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <label htmlFor="name">{t("new2")}</label>
                    <br />
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="border rounded border-black  py-[7px] px-4"
                    />
                    <br />
                    <br />
                    <label htmlFor="name2">{t("new3")}</label>
                    <br />
                    <input
                      type="text"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="border rounded border-black py-[7px] px-4"
                    />
                    <br />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={() => addTodo()}>Agree</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:w-[85%] w-auto overflow-y-scroll h-[600px]  m-auto gap-10 pt-[80px]">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-start">
                <img src={frame} alt="" />
                <div>
                {todo.complete?(<s> <h1 className="text-[18px] text-[#ff3e3e]">{todo.title}</h1></s>):(<h1 className="text-[18px] dark:text-white text-[#212B31]">{todo.title}</h1>)}
                <p className="text-[16px] text-[#72787D]">{todo.desc}</p>

                  <div className="flex justify-between items-center">
                    <Space wrap>
                      <Button
                        onClick={() => showDeleteConfirm(todo.id)}
                        type="primary"
                        danger
                      >
                        Delete
                      </Button>
                    </Space>

                    <div className="flex items-center gap-[10px]">
                      <div>
                      <Space wrap>
                      <Button
                        onClick={() => complteTodo(todo.id)}
                        type="text"
                        className="text-green-500"
                      >
                        Completed
                      </Button>
                    </Space>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Button onClick={() => handleOpen(todo)} type="link">
                          Edit
                        </Button>
                      </div>
                      <form>
                        <Dialog
                          open={modal}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={handleClick}
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogTitle>{"Edit Title"}</DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              <label htmlFor="name">Name of Title:</label>
                              <br />
                              <input
                                type="text"
                                value={user}
                                name="name"
                                onChange={(e) => setUser(e.target.value)}
                                className="border rounded border-black py-[7px] px-4"
                              />
                              <br />
                              <br />
                              <label htmlFor="name2">
                                Name of Description:
                              </label>
                              <br />
                              <input
                                type="text"
                                value={user2}
                                name="name2"
                                onChange={(e) => setUser2(e.target.value)}
                                className="border rounded border-black py-[7px] px-4"
                              />
                              <br />
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClick}>Disagree</Button>
                            <Button onClick={editTodo}>Agree</Button>
                          </DialogActions>
                        </Dialog>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-[30px] text-center">
            <h1>
              <span className="text-[20px] dark:text-white text-[#212B31] border-b-[2px] border-yellow-500">
               {t("span")}
              </span>{" "}
              <span className="text-[20px] text-[#72787D]">
                {" "}
                {t("span2")}
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] py-[100px]">
        <div className="container">
          <div className="text-center m-auto w-auto lg:w-[70%]">
            <div className="flex  justify-center">
              <h1 className="text-[32px] text-[#212B31] dark:text-white">{t("sec")}</h1>
              <img className="mt-[-5%] ml-[-1%]" src={vector} alt="" />
            </div>
            <p className="text-[#72787D] text-[20px]">
              {t("sec2")}
            </p>
          </div>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex flex-wrap justify-around py-[80px]">
            <Stroyka
              img={frame2}
              text1={t("dirty")}
              text2={t("dirty2")}
            />
            <Stroyka
              img={frame3}
              text1={t("clean")}
              text2={t("clean2")}
            />
            <Stroyka
              img={frame4}
              text1={t("nature")}
              text2={t("nature2")}
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-around w-auto lg:w-[80%] bg-[#F6F8F9] dark:bg-black rounded py-[30px] px-[45px] gap-[10px] m-auto items-center">
            <div className="flex gap-[8px] items-center">
              <img src={frame5} alt="" />
              <h1 className="text-[18px] text-[#212B31] dark:text-white font-[500]">
                {t("standart")}
              </h1>
            </div>
            <div>
              <button className="text-[18px] text-[#212B31] dark:text-white rounded py-[7px] px-[15px]  border border-[#212B31]">
                {t("more")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] bg-[#212B31] dark:bg-gray-600 mt-[140px]">
        <div className="container">
          <div className="flex xl:flex-row flex-col items-center py-[100px]">
            <div className="xl:w-[50%]">
              <h1 className="text-[32px] dark:text-[#000] text-[#FFFF]">
                {t("created")}
              </h1>
              <div className="flex gap-2 items-baseline my-[25px] w-[80%]">
                <img src={krug} alt="" />
                <div>
                  <h1 className="text-[18px] text-[#FFF] dark:text-[#000]">
                    {t("created2")}
                  </h1>
                  <p className="text-[16px] text-[#c5c4c4]">
                   {t("created4")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-baseline my-[25px] w-[80%]">
                <img src={krug} alt="" />
                <div>
                  <h1 className="text-[18px] text-[#FFF] dark:text-[#000]">
                    {t("created3")}
                  </h1>
                  <p className="text-[16px] text-[#c5c4c4]">
                   {t("created5")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-baseline my-[25px] w-[80%]">
                <img src={krug} alt="" />
                <div>
                  <h1 className="text-[18px] text-[#FFF] dark:text-[#000]">
                   {t("created6")}
                  </h1>
                  <p className="text-[16px] text-[#c5c4c4]">
                    {t("created7")}
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-[50%]">
                <Button3 btn={t("request")} />
                <button className="text-[#FFFF] text-[18px] border border-[#FFFF] py-[10px] rounded px-[20px]">
                  {t("more")}
                </button>
              </div>
            </div>
            <div className="mt-[50px] xl:mt-0">
              <img src={tel} alt="" />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-center lg:items-start justify-around py-[30px]">
            <Stroyka2
              img={frame6}
              text1={t("what")}
              text2={t("what2")}
            />
            <Stroyka2
              img={key}
              text1={t("what3")}
              text2={t("what4")}
            />
            <Stroyka2
              img={key2}
              text1={t("what5")}
              text2={t("what6")}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[100px]">
        <div className="container">
          <div className="flex lg:flex-row flex-col justify-around items-center lg:items-start">
            <div className="w-auto lg:w-[35%]">
              <div>
                <h1 className="text-[32px] dark:text-white text-[#212B31]">
                  {t("work")}
                </h1>
                <p className="text-[20px] text-[#72787D]">
                  {t("work2")}
                </p>
              </div>
              <div className="py-[20px]">
                <img className="dark:bg-slate-400 m-auto lg:m-0" src={ti} alt="" />
              </div>
            </div>
            <div className="w-auto lg:w-[35%]">
              <Title
                Imgteg={group}
                teg1={t("request")}
                teg2={t("response")}
              />
              <Title
                Imgteg={group2}
                teg1={t("response2")}
                teg2={t("response3")}
              />
              <Title
                Imgteg={group3}
                teg1={t("ready")}
                teg2={t("ready2")}
              />
              <Title
                Imgteg={group4}
                teg1={t("ready3")}
                teg2={t("ready4")}
              />
              <div className="flex justify-between m-auto sm:w-[80%] md:w-[60%] lg:m-0 lg:w-auto lg:gap-[30px] 2xl:w-[75%]">
                <Button2 btn={t("request")} />
                <button className="text-[18px] text-[#212B31] dark:text-white rounded border border-[#212B31] dark:border-white py-[10px] px-[20px]">
                  {t("more")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[100px] ">
        <div className="container">
          <div className="text-center m-auto w-auto lg:w-[70%]">
            <h1 className="text-[32px] dark:text-white text-[#212B31]">
              {t("why")}
            </h1>
            <p className="text-[20px] dark:text-white text-[#212B31]">
             {t("why2")}
            </p>
          </div>

          <div className="flex lg:flex-row flex-col justify-around items-center py-[50px]">
            <div className="lg:w-[45%]">
              <Title
                Imgteg={znak}
                teg1={t("teg1")}
                teg2={t("teg2")}
              />
              <Title
                Imgteg={klick}
                teg1={t("teg3")}
                teg2={t("teg4")}
              />
              <Title
                Imgteg={planet}
                teg1={t("teg5")}
                teg2={t("teg6")}
              />
              <Title
                Imgteg={planet2}
                teg1={t("teg7")}
                teg2={t("teg8")}
              />
            </div>
            <div className="lg:w-[43%] bg-[#F6F8F9] rounded-[5px] py-[30px] m-auto px-[60px]">
              <h1 className="xl:text-[30px] text-[24px] text-[#212B31]">
                {t("teg9")}
              </h1>
              <div className="flex gap-[8px] items-start py-[25px]">
                <img src={ava} alt="" />
                <div>
                  <h1 className="text-[16px] text-[#212B31]">{t("volk")}</h1>
                  <p className="text-[16px] text-[#72787D]">
                    {t("volk2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-[55%] m-auto items-center gap-[30px]">
            <div className="text-center lg:w-[30%]">
              <img src={surat} className="m-auto" alt="" />
              <h1 className="text-[#72787D] text-[16px] py-[10px]">
                {t("fifth")}
              </h1>
            </div>
            <div className="text-center lg:w-[30%]">
              <img src={surat2} className="m-auto" alt="" />
              <h1 className="text-[#72787D] text-[16px] py-[10px]">
                {t("startup")}
              </h1>
            </div>
            <div className="text-center lg:w-[30%]">
              <img src={surat3} className="m-auto" alt="" />
              <h1 className="text-[#72787D] text-[16px] py-[10px]">
                {t("fifth")}
              </h1>
            </div>
            <div className="text-center lg:w-[30%]">
              <img src={surat4} className="m-auto" alt="" />
              <h1 className="text-[#72787D] text-[16px] py-[10px]">
                {t("startup")}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[120px] ">
        <div className="container">
          <div className="text-center lg:w-[80%] picture py-[60px] lg:py-[100px] rounded px-[40px] m-auto">
            <h1 className=" md:text-[28px] text-[18px] lg:text-[48px] dark:text-black text-[#212B31]">
              {t("wtf")}
            </h1>
            <div className="flex justify-center gap-[20px] lg:gap-[50px] py-[15px] lg:py-[50px]">
              <Button2 btn={t("request")} />
              <Button3 btn={t("contact")} />
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-[100%] my-[50px]">
        <div className="container">
          <div className="flex flex-wrap lg:w-[80%] m-auto py-[150px] justify-around border-b border-[#DADEDF]">
            <div>
              <img src={logo} className="cursor-pointer dark:bg-slate-400" alt="" />
              <br />
              <div className="text-[16px] text-[#72787D]">
                <h1>{t("city")}</h1>
                <h1>{t("nomer")}</h1>
                <br />
                <h1>info@stroycontrol.ru</h1>
                <h1>+7 (945) 123-45-67</h1>
                <br />
                <img src={book} className="cursor-pointer" alt="" />
              </div>
            </div>
            <div className="text-[16px] text-[#72787D]">
              <h1 className="text-[16px] dark:text-white text-[#212B31]">{t("prod")}</h1>
              <br />
              <h1>{t("process")}</h1>
              <h1>{t("production")}</h1>
            </div>
            <div className="text-[16px] text-[#72787D]">
              <h1 className="text-[16px] dark:text-white text-[#212B31]">{t("lala")}</h1>
              <br />
              <h1>{t("client")}</h1>
              <h1>{t("reliability")}</h1>
            </div>
            <div className="text-[16px] text-[#72787D]">
              <h1 className="text-[16px] dark:text-white text-[#212B31]">{t("company")}</h1>
              <br />
              <h1>{t("about")}</h1>
              <h1>{t("contact")}</h1>
            </div>
          </div>
          <div className="flex justify-between py-[40px] w-[80%] m-auto">
            <div className="cursor-pointer">
              <h1 className="text-[#72787D]">
                {t("twelwe")}
              </h1>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[#72787D]">{t("confid")}</h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
