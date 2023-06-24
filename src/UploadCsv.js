import React, { useState } from "react";
import Papa from "papaparse";
import Validate_links from "./Validate_Links";

const allowedExtensions = ["csv"];
const res = [];
const notres = [];

const UploadCsv = () => {
	
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [file, setFile] = useState("");
	const handleFileChange = (e) => {
		setError("");
		if (e.target.files.length) {
			const inputFile = e.target.files[0];
			const fileExtension = inputFile.type.split("/")[1];
			if (!allowedExtensions.includes(fileExtension)) {
				setError("Please input a csv file");
			}

			setFile(inputFile);
		}
	};
	const handleParse = () => {
		if (!file){
			alert("Enter a valid file");
			 return setError("Enter a valid file");
		}
		const reader = new FileReader();
		reader.onload = async ({ target }) => {
			
			const csv = Papa.parse(target.result, { header: true });
			const parsedData = csv.data;
			console.log(parsedData);
				setData(parsedData);
				alert("CSV file uploaded");	
		};
		reader.readAsText(file);
	};
	const validate = () =>{
		const regEX= /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
		data.forEach(myfunction);
		function myfunction(data){
		if(regEX.test(Object.values(data))){
		  res.push(Object.values(data));
		  //console.log(res);
		}
		else if(!regEX.test(Object.values(data))){
			notres.push(Object.values(data));
			//console.log(notres);
		}
	
}		
	};

	return (
		<Validate_links 
		key={0}
		handleFileChange={handleFileChange}
		handleParse={handleParse}
		validate={validate}
		/>
	);
};

export default UploadCsv;
export {res , notres};