
public class BasketballTeam extends SportsTeam
{
	
	private int fieldGoals;
	private int fieldGoalsAttempted;
	private int freeThrows;
	private int freeThrowsAttempted;
	
	public BasketballTeam()
	{
		teamName = "";
		teamMascot = "";
		headCoach = "";
		wins = 0;
		losses = 0;
		fieldGoals = 0; 
		fieldGoalsAttempted = 0;
		freeThrows = 0;
		freeThrowsAttempted = 0;
		
	}//end empty-argument constructor
	
	public BasketballTeam(String teamName, String teamMascot, String headCoach)
	{
		this.teamName = teamName;
		this.teamMascot = teamMascot;
		this.headCoach = headCoach;
		wins = 0;
		losses = 0;
		fieldGoals = 0; 
		fieldGoalsAttempted = 0;
		freeThrows = 0;
		freeThrowsAttempted = 0;
	}//end preferred constructor
	
	public double fieldGoalPercentage()
	{
		return fieldGoals/fieldGoalsAttempted;
	}//end fieldGoalPertcentage
	
	public double freeThrowPercentage()
	{
		return freeThrows/freeThrowsAttempted;
	}//end freeThrowPercentage
	
	public void setStats(int wins, int losses, int fieldGoals, int fieldGoalsAttempted, int freeThrows, int freeThrowsAttempted)
	{
		this.wins = wins;
		this.losses=losses;
		this.fieldGoals = fieldGoals;
		this.fieldGoalsAttempted = fieldGoalsAttempted;
		this.freeThrows = freeThrows;
		this.freeThrowsAttempted= freeThrowsAttempted;
	}//end setStats
	

	@Override
	public double[] getStats() {
		double[] Stats = {wins/(wins+losses) , fieldGoals/fieldGoalsAttempted, freeThrows/freeThrowsAttempted};
		return Stats;
	}//end getStats

	

}//end class
