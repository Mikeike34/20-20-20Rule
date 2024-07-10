import java.security.SecureRandom;
import java.util.Random;

/**
 * This is our NonPlayer Character that inherits
 * from GameCharacter it represent objects the game controls 
 * (as opposed to objects a human player controls).
 * @author 
 * @version 1.3
 * Lab1
 * CS131ON
 */

public class NonPlayerCharacter extends GameCharacter
{
	
	private boolean active = false;
	private String intelligenceType;
	
	public NonPlayerCharacter()
	{
		
	}//end empty-argument constructor
	
	public NonPlayerCharacter(String id, String personality, boolean active, String intelligenceType)
	{
		this.setIntelligenceType(intelligenceType);
		this.setActive(active);
		this.setPersonality(personality);
	} //end preferred constructor
	
	public String reportStructure()
	{
		System.out.println(super.reportStructure());
		StringBuilder s = new StringBuilder();
		s.append("Active: "+isActive()+"\n");
		s.append("Intelligence: "+getIntelligenceType()+"\n");
		s.append("==================================\n");
		
		return s.toString();
	}//end reportStructure
	
	public String introduce()
	{
	    return("Hello, my name is "+this.getUniqueID());
		
	}//end introduce
	
	public String exclaim()
	{
		Random r = new Random();
		String[] A= {"Dag Gummit", "Doggone it", "Holy Cow", "Jeez", "Well cheese and crackers"};
		String exclamation = A[r.nextInt(A.length)];
		return exclamation;
		
	}//end exclaim
	
	//getters and setters
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getIntelligenceType() {
		return intelligenceType;
	}

	public void setIntelligenceType(String intelligenceType) {
		this.intelligenceType = intelligenceType;
	}
	
	

}//end class
