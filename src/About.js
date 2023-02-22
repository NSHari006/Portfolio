import React from "react";
import "./about.css";


const About = () => {
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <h2>About Me</h2>
            <hr></hr>
            <h3 className="h3">Education</h3>
            <div class="container">
	<table>
	
		<tbody>
			<tr>
				<td><b>Bachelor's</b></td>
				<td>Computer Science</td>
				<td>74%</td>
			
			</tr>
			<tr>
				<td><b>HSC</b></td>
				<td>Bio</td>
				<td>69%</td>
	
			</tr>
			<tr>
				<td><b>SSLC</b></td>
				<td>-</td>
				<td>84%</td>
			</tr>
	
		</tbody>
	</table>
    <br/>
    <h3 className="h3-1">Certification</h3>
    <table>

    
    <tbody>
        <tr>
            <td><b>Frontend Developer</b></td>
            <td>2023</td>
          
        
        </tr>
        <tr>
            <td><b>Python Internship</b></td>
            <td>2022</td>
          

        </tr>
        <tr>
            <td><b>Smart India Hackathon</b> <i>participation</i></td>
            <td>2021</td>
            
        </tr>
    </tbody>
  
	
</table>
 
  
  <br/>
  <h3 className="h3-1">Projects</h3>
    <table>

    
    <tbody>
        <tr>
            <td>Ekart</td>
            <td>Ecommerce Web app</td>
            <td>ReactJS</td>
          
        
        </tr>
        <tr>
            <td>Portfolio</td>
            <td>Personal Blog</td>
            <td>ReactJS</td>
          

        </tr>
        <tr>
            <td>Calculator</td>
            <td>React components</td>
            <td>ReactJS</td>
            
        </tr>
    </tbody>
  
	
</table>
</div>
            
        </div>
    )
}



export default About;