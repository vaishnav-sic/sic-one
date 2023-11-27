import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { AgGridReact } from "ag-grid-react";
import { db } from "../firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { element } from "prop-types";

const AdminPage = () => {
  const [dataForStudents, setDataForStudents] = useState([]);
  const [dataForNews, setDataForNews] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    const checkAuthentication = () => {
      const user = auth.currentUser;

      if (!user) {
        router.push("/adminlogin");
      } else {
        setUser(user);
        setLoading(false); // Set loading to false when authentication check is complete
      }
    };

    checkAuthentication();

    // Add a cleanup function to clear any ongoing asynchronous tasks when the component unmounts
    return () => {
      // Cleanup tasks (if any)
    };
  }, [router]);

  
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const fetchData = async () => {
    const querySnapshotForNews = await getDocs(collection(db, "EnquiryForm"));
    const querySnapshotForStudents = await getDocs(
      collection(db, "EnquiryForm")
    );
    
    const studentsData = querySnapshotForStudents.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    let count = 0;
    studentsData.forEach((element) => {
      element.id = ++count;
    });
    count = 0;
    setDataForStudents(studentsData);
  };

  const columnsForStudentds = [
    { field: "id", headerName: "Sr No", width: 150, editable: true },
    
    {
      field: "firstName",
      headerName: "FirstName",
      width: 100,
    },
    {
      field: "lastName",
      headerName: "LastName",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email-Id",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "graduation",
      headerName: "Graduation in",
      width: 100,
    },
    {
      field: "passoutYear",
      headerName: "Passout Year",
      width: 120,
    },
    {
      field: "message",
      headerName: "Msessage",
      width: 150,
    },
    
  ];

  

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"7rem" }}
    >
      
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{
          height: 300,
          width: "85%",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        <AgGridReact
          columnDefs={columnsForStudentds}
          rowData={dataForStudents}
        ></AgGridReact>
      </div>
    </div>
  );
};
export default AdminPage;
