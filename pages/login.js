import Image from 'next/image'
import styles from '../styles/login.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
import axios from 'axios';

export default function Login(){
	
	
	const [credentials,setCredentials] = useState({email:"",password_hash:"",})
/* 
 const handleSubmit = async (e) =>{
	  e.preventDefault();
	 console.log(email,password_hash);
	 let item=(email,password_hash);
	 let result= await fetch("https://sparsh.teaminventive.ml/api/user/login",{
		 method:'POST',
		 headers:{
			 "Content-Type":"application/json",
			 "Accept":"application/json"
		 },
		 body:JSON.stringify(item)
	 }
	 );
	 result= await result.json();
	 localStorage.setItem('token',json.authtoken);
	 history.pushState("/")
 } */

 const checklogin = e =>{
	e.preventDefault()
/* 	 console.log(credentials);  */
	axios.post('https://sparsh.teaminventive.ml/api/users/login',credentials, {headers:{
		"Content-Type":"application/json",
		"Accept":"application/json"
	}} )
	.then(response => {
		 /* console.log(response)  */
		const json = response.data;
		/* console.log(json.jwttoken);  */
		localStorage.setItem('token',json.jwttoken);

	})
	.catch(error => {
		console.log(error)
	});
	
	
}

const onchange =(e)=>{
	setCredentials({...credentials,[e.target.name]:e.target.value})
}

	return(
		<div>
<html>		
	<header>
		<nav className={styles.nav}>
			<Link href="/" passHref>
				<div style={{cursor: 'pointer'}}>
				<Image src={require('../public/logo.png')} alt="sparshlogo"/>
				</div>
			</Link>
		</nav>
	</header>

	<body>
		<div style={{height: 55+ 'px'}}></div>
		<form /* action="action_page.php" */ onSubmit={checklogin}>
			<div className={styles.container}>
				<h1>Login</h1>
				<p>Enter email (or) username and passsword.</p>
				<hr className='hr'/>
		
				<label><b>Email/Username</b></label>
				<br/>
				<input type="text" placeholder="Enter Email/Username" name="email" id="email" onChange={onchange}   className={styles.input} required/>
				<br/>

				<label><b>Password</b></label>
				<br/>
				<input type="password" placeholder="Enter Password" name="password_hash" id="password_hash" onChange={onchange} className={styles.input} required/>
				<br/>
				<button type="submit"   className={styles.registerbtn}>Login</button>
			</div>
		
			<div className={styles.instructions}>
				<p>Contact <Link href="tel:+919409656394">+91 9409 6563 94</Link> or <Link href="mailto:lharsh175@gmail.com">lharsh175@gmail.com</Link> if you face any difficulties. </p>
			</div>
		</form>
	</body>
</html>
</div>
)
}