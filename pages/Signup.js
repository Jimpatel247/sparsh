import Image from 'next/image'
import styles from '../styles/login.module.css'
import Link from 'next/link'
import React, {useState} from 'react';

import axios from 'axios';

export default function Signup(){
	const [credentials,setCredentials] = useState({firstname:"",lastname:"",email:"",password_hash:"",})
    

	/* const handleSubmit = async (e) =>{
		e.preventDefault();
		const {firstname,lastname,email,password_hash} =credentials
		const response = await fetch("https://8085-pink-marlin-v70ogm9q.ws-us27.gitpod.io/api/users/register",{ 
            method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({firstname,lastname,email,password_hash})
             
		});
		const json = await response.json()
		console.log(json);
		localStorage.setItem('token',json.authtoken);
		history.pushState("/")
		
	} */

	 const check = e =>{
		e.preventDefault()
		 /* console.log(credentials);  */
		axios.post('https://sparsh.teaminventive.ml/api/users/register',credentials,{headers:{
			"Content-Type":"application/json",
			
		}} )
		.then(response => {
			/*  console.log(response) */ 
			const json = response.data;
			 /* console.log(json.jwttoken); */ 
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
		<form action="action_page.php" onSubmit={check}>
			<div className={styles.container}>
				<h1>Signup</h1>
				<p>Enter registration detail</p>
				<hr className='hr'/>
		
				<label><b>Firstname</b></label>
				<br/>
				<input type="text" placeholder="Enter Firstname" name="firstname" id="firstname" onChange={onchange} className={styles.input} required/>
				<br/>
                <label><b>Lastname</b></label>
				<br/>
				<input type="text" placeholder="Enter Lastname" name="lastname" id="lastname" onChange={onchange} className={styles.input} required/>
				<br/>
                <label><b>Email Id</b></label>
				<br/>
				<input type="email" placeholder="Enter EmailId" name="email" id="email" onChange={onchange} className={styles.input} required/>
				<br/>
				<label><b>Password</b></label>
				<br/>
				<input type="password" placeholder="Enter Password"  name="password_hash" id="password_hash " onChange={onchange} className={styles.input} required/>
				<br/>
				<button type="submit" className={styles.registerbtn}>Register</button>
			</div>
		
			<div className={styles.instructions}>
				<p>Contact <Link href="tel:+919409656394">+91 9409 6563 94</Link> or <Link href="mailto:lharsh175@gmail.com">lharsh175@gmail.com</Link> if you face any difficulties. </p>
			</div>
		</form>
	</body>
</html>
)
}