package com.company;

import java.util.ArrayList;

public class BankAccount {
    // Add attributes for name and balance
    private String name;
    private double balance;

    public ArrayList getPayees() {
        return payees;
    }

    public void setPayees(ArrayList payees) {
        this.payees = payees;
    }

    private ArrayList payees = new ArrayList<String>();
    //Add a constructor
    public BankAccount(String name, int balance) {
        this.name = name;
        this.balance = balance;
    }
    //Add getters and setters for both
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
    //Add toString method for sout-ing
    public String toString() {
        return "Your account balance is " + this.balance;
    }

    public void withdraw (double amount) {
        if(amount > 0 && amount < balance) {
            balance -= amount;
        } else {
            System.out.println("Please deposit a valid amount");
        }

    }

    public void deposit (double amount) {
        if(amount > 0) {
            balance += amount;
        } else {
            System.out.println("Please add a valid amount");
        }
    }
    //Add a new payee
    public void addPayee (String name) {
        payees.add(name);

    }
    //Update payee details
    public void updatePayeeDetails (int position, String newDetails) throws Exception {
       try{
           payees.set(position,newDetails);
       }
       catch (IndexOutOfBoundsException exception) {
           throw new IndexOutOfBoundsException(String.valueOf(exception));
       }
       catch (Exception e) {
           throw new Exception("Error");
       }

    }


}
