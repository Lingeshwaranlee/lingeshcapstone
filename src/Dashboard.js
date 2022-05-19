import Box from "@mui/material/Box";
import { RiDashboardFill } from "react-icons/ri";
import { Graph } from "./Graph";
import { Graph1 } from "./Graph1";
export function Dashboard() {
  return (
    <div style={{ width: "100%" }}>
      <h2
        style={{
          justifyContent: "center",
          textAlign: "center",
          color: " #4e73df",
          padding: "1%",
        }}
      >
        DASHBOARD <RiDashboardFill style={{ color: "black" }} />
      </h2>
      <div style={{}}>
        <div>
          <h4 style={{ marginTop: "1%", marginLeft: "2%" }}>OVERVIEW</h4>
          <Box
            sx={{
              width: "60%",
              height: "100%",
              backgroundColor: "white",
              marginTop: "1%",
              marginLeft: "2%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
              position: "static",
              padding: "2%",
            }}
          >
            <p>
              completion<span style={{ paddingLeft: "70%" }}>85%/100%</span>
            </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuenmax="75"
                style={{
                  backgroundColor: " #4e73df",
                  color: "blue",
                  width: "85%",
                }}
              ></div>
            </div>
          </Box>
        </div>
      </div>
      <div>
        <Graph1 />
        <Graph />
      </div>
    </div>
  );
}
