import * as React from "react";
import { useDownloadFile } from "./useDownloadFile";

function Downloader(){
	const url = 'https://drive.google.com/file/d/1T5ZXM-TOyqx1rJlmvNit9bUCveZA4ijt/view?usp=sharinghttps://media.ambito.com/p/36a1f919a24c2f7f90921cfb509e5949/adjuntos/239/imagenes/039/850/0039850910/1200x1200/smart/homerjpeg.jpeg';
	const downloadUrl = useDownloadFile(url);
	return (
		<button>
			<a donwnload="download.zip" href={downloadUrl}>
			{url}
			</a>
		</button>
		
		)
}

export default Downloader;