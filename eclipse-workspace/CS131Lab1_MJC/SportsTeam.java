
public abstract class SportsTeam 
{
	protected String teamName;
	protected String teamMascot;
	protected String headCoach;
	protected int wins;
	protected int losses;
	
	public SportsTeam()
	{
		teamName = "";
		teamMascot = "";
		headCoach = "";
		wins = 0;
		losses = 0;
		
	}//end empty-argument constructor
	
	public SportsTeam(String teamName, String teamMascot, String headCoach)
	{
		this.teamName = teamName;
		this.teamMascot=teamMascot;
		this.headCoach=headCoach;
		wins = 0;
		losses = 0;
		
	}//end preferred constructor
	
	public double getWinPercentage()
	{
		return (double) wins/(wins + losses);
	}//end getWinPercentage
	
	public abstract double[] getStats();
	
	

} //end class
