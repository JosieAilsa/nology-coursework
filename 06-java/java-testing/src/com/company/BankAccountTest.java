package com.company;

import static org.junit.jupiter.api.Assertions.*;

class BankAccountTest {
    private BankAccount account;

    @org.junit.jupiter.api.BeforeEach
    void setUp() {
        //Arrange
        account = new BankAccount("Sam", 1000);

    }
    //Runs before here
    @org.junit.jupiter.api.Test
    void wihthdraw_twoHundred_SetsBalanceEightHundred() {
        //Act
        account.withdraw(200);
        //Assert
        assertEquals(800, account.getBalance());
    }

    //Runs before here
    @org.junit.jupiter.api.Test
    void deposit_twoHundred_SetsBalanceOneThousandTwoHundred() {
        //Act
        account.deposit(200);
        //Assert
        assertEquals(1200, account.getBalance());
    }

    @org.junit.jupiter.api.Test
    void updatePayeeDetails_positionOne_shouldBeDad() {
        //Act
        account.addPayee("Mum");
        account.addPayee("Dad");
        //Assert
        assertEquals("Dad", account.getPayees().get(1));
    }

    @org.junit.jupiter.api.Test
    void updatePayeeDetails_length_shouldBeTwo() {
        //Act
        account.addPayee("Mum");
        //Assert
        assertEquals(1, account.getPayees().size());
    }



    //Runs before here
    @org.junit.jupiter.api.Test
    void updatePayeeDetails_invalidPosition_shouldThrowException() {
        //Act
        account.addPayee("Mum");
        //Assert
        assertThrows(Exception.class, () -> {
            account.updatePayeeDetails(1,"Dad");
        });
    }


}