import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";

interface DashboardCardProps {
  id: number;
  description: string;
  status: string;
  type: string;
  rating: number;
  location: string;
  getStatusProgress: (status: string) => number;
}


const DashboardCard: React.FC<DashboardCardProps> = ({
  id,
  description,
  status,
  type,
  rating,
  location,
  getStatusProgress,
}) => {
  const badgeColor = (rating: number) => {
    if (rating <= 0.3) return '#4CAF50';  // Green for low severity
    if (rating <= 0.6) return '#FFC107';  // Yellow for medium severity
    if (rating <= 0.9) return '#FF5722';  // Orange for high severity
    return '#F44336';  // Red for most severe
  };

  return (
    <Card key={id} sx={{ mt: 2, borderRadius: "10px" }}>
      <LinearProgress variant="determinate" value={getStatusProgress(status)} />
      <CardContent sx={{ position: "relative" }}>
        <Typography variant="h6">{description}</Typography>

        {/* Display Case Type */}
        <Chip label={type} sx={{ mt: 1 }} />

        {/* Custom Severity Rating Display */}
        <div style={{ display: 'inline-block', position: 'absolute', top: 0, right: 0, backgroundColor: badgeColor(rating), padding: '5px 10px', borderTopRightRadius: '5px', borderBottomLeftRadius: '5px', fontSize: '20px'}}>
          {rating}
        </div>

        {/* Display Case Location */}
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          Location: {location}
        </Typography>

        <Typography
          color="textSecondary"
          variant="subtitle1"
          sx={{
            fontSize: "11px",
            position: "absolute",
            bottom: 0,
            right: 0,
            background: "#40B5AD",
            color: "white",
            p: "5px 10px",
            borderTopLeftRadius: "10px",
          }}
        >
          {status}
        </Typography>
        <Link to={`/case-details/${id}`}>
          <Button variant="contained" sx={{ mt: 2 }} className="btn">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
