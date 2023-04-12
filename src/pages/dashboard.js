import React from "react";
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Profile from "./dashboard_details/Profile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Otheruser from "./dashboard_details/Other_User";
// import OtherUser from "./dashboard_details/Other_User";
// import Menu2 from "./dashboard_details/Menu_2";

function Dashboard() {
    const [btn1, setBtn1] = useState();
    const [btn2, setBtn2] = useState();
    const handleClick1 = () => {
        setBtn1(!btn1)
    }
    const handleClick2 = () => {
        setBtn2(!btn2)
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem("userdetails"));
        setEmail(userDetails.email1);
        setPassword(userDetails.password1);
        setPhone(userDetails.number);
        setProfileImage(userDetails.image);
        setFullName(userDetails.name);
        setDob(userDetails.date);
    }, []);

    const handleEdit = () => {
        const userDetails = {
            email,
            password,
            phone,
            profileImage,
            fullName,
            dob
        };
        alert("Your details are updated")
        // console.log(userDetails)
        localStorage.setItem("userdetails", JSON.stringify(userDetails));
        // const history = useHistory()
        // history.push('/App')
    };
   
    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirmDelete) {
            localStorage.removeItem('user');
            navigate('/')
        }
    }
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={handleClick1} className="btn btn-primary">Other_User_Details</button>
            {btn1 && <div className="table-responsive">
                <table className="table table-primary">


                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Yash shah</td>
                            <td>12345678</td>
                            <td>2002-02-07</td>
                            <td>yash722002@gmail.com</td>
                        </tr>
                        <tr className="">
                            <td>Ritesh shah</td>
                            <td>12345678</td>
                            <td>2000-01-04</td>
                            <td>ritesh@abc.com</td>
                        </tr>
                        <tr className="">
                            <td>Nitish tiwari</td>
                            <td>12345678</td>
                            <td>2001-02-03</td>
                            <td>nitish@def.com</td>
                        </tr>
                        <tr className="">
                            <td>Meet shah</td>
                            <td>23456789</td>
                            <td>2002-06-08</td>
                            <td>meet@ghi.com</td>
                        </tr>
                        <tr className="">
                            <td>Mickey shah</td>
                            <td>13456789</td>
                            <td>2002-06-08</td>
                            <td>mickey@ghi.com</td>
                        </tr>
                        <tr className="">
                            <td>Neeta mehta</td>
                            <td>21456789</td>
                            <td>2003-06-08</td>
                            <td>neeta@ghi.com</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>}
            <button className="btn btn-primary" onClick={handleClick2}>Profile</button>
            {btn2 &&
                <div>
                    <h2>Edit Profile</h2>
                    <form>
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="password">password:</label>
                        <input
                            type="password"
                            id="password2"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="number"
                            id="number"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="name">fullName:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="date">DOB:</label>
                        <input
                            type="date"
                            id="date"
                            className="form-control"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />



                        <button className="btn btn-primary" type="button" onClick={handleEdit}>
                            Save
                        </button>
                        <button className="btn btn-primary" type="button" onClick={handleDelete}> Delete</button>
                    </form>
                </div>}

            {/* <BrowserRouter>
            <Menu2/>
            <Routes>
            <Route exact path='/profile' element={<Profile/>}></Route>
            <Route exact path='/otheruser' element={<OtherUser/>}></Route>
            </Routes>
            </BrowserRouter> */}
        </div>
    );
}
export default Dashboard