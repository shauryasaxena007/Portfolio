import { GitHubCalendar } from "react-github-calendar";
const GitHubActivity = () => {
  return (
    <div className="w-full overflow-x-auto">
      <GitHubCalendar
        username="shauryasaxena007"
        colorScheme="dark"
        blockSize={10}
        blockMargin={3}
        fontSize={12}
      />
    </div>
  );
};

export default GitHubActivity;