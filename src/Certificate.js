import {GrCertificate} from 'react-icons/gr';

//Certificate page component
export function Certificate() {
  return (
    <div>
      <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",padding:"1%" }}>CERTIFICATE <GrCertificate /></h2>
      <h5 style={{ justifyContent: "center", textAlign: "center",padding:"3%",width:"100%"  }}>
        Your Certificate is not yet Generated.
      </h5>
      <img style={{marginLeft:'28%',padding:"3%",width:"55%"}} src='https://media.istockphoto.com/videos/certificate-icon-animation-video-id1034003628?s=640x640' alt='img'></img>
    </div>
  );
}
