import java.util.Scanner;

 public class Mortgage{
 
   
   public static void main(String[] args) {

	Scanner scnr = new Scanner(System.in);
	
	System.out.println("Enter a loan amount: ");
	double principal = scnr.nextDouble();
	
	System.out.println("Enter a yearly interest rate: ");
	double monthlyInterestRate = scnr.nextDouble() / 12.0;
	
	System.out.println("Enter a number of years: ");
	double years = scnr.nextDouble();
	
	double numberOfMonths = years * 12.0; 
	
	double top = (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfMonths)); 
	double bottom = Math.pow((1+ monthlyInterestRate), numberOfMonths) - 1;
	
	double monthlyPayment = principal * (top)/(bottom);
	
	double interestPerMonth;
	double principalPerMonth;
       
     System.out.printf("The flat monthly payment is %.02f\n\n", monthlyPayment);
     
     for( int i = 1; i <= numberOfMonths; i++) {
    	 
    	 interestPerMonth = (monthlyInterestRate * principal);
    	 principalPerMonth = (monthlyPayment - interestPerMonth);
    	 principal -= principalPerMonth;
    	 
    	 System.out.format("Month: %d    Interest: %.02f    Principal Paid: %.02f   Principal Remaining:  %.02f\n", i, interestPerMonth, principalPerMonth, principal);
    	 
    	 
    	 if(i % 12 == 0) {
    		 System.out.println("End Year: " + i/12);
    	 }
    	 
    	 
    	 
    	 
    	 
     }
     
     
     scnr.close();
     
   }
 
}
