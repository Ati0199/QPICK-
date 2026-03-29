import "./DropDownSkeleton.css";

export default function DropDownSkeleton() {
  return (
    <div className="dropdown">
      <div className="skeleton-trigger"></div>
      <div className="skeleton-menu">
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </div>
    </div>
  );
}
