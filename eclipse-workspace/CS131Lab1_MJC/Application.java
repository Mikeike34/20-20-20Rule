/**
 * This is the Application object that will launch our application
 * @author Rob Kelley
 * @version 1.3
 * Lab1 
 * CS131ON
 */
public class Application {

	public static void main(String[] args) {
		
		
		//Test for NonPlayerCharacter
		NonPlayerCharacter npc = new NonPlayerCharacter("487", "Neutral", false, "AVERAGE");
		//Uncomment the line below to ensure reportStructure() method works after you have written it.
		System.out.println(npc.reportStructure());
		System.out.println(npc.introduce());
		System.out.println(npc.exclaim());
		
		//Test for BasketballTeam
		BasketballTeam lakers = new BasketballTeam("Lakers","No Mascot","JJ Redick");
		
		lakers.setStats(22, 10, 200, 450, 48, 75);
		double[] stats = lakers.getStats();
	    System.out.println("Win Percentage: " + stats[0]);
	    System.out.println("Field Goal Percentage: " + stats[1]);
	    System.out.println("Free Throw Percentage: " + stats[2]);
		

	}//end main
	
	

}//end class