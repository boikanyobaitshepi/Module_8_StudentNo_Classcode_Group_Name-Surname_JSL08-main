//BankBranch class
class BankBranch {
    constructor(branchInfo) {
        if (!BankBranch.instance) {
            this.branchInfo = "null";
            BankBranch.instance = this;
        }
        return BankBranch.instance;
    }

    getBranchInfo() {
        return this.branchInfo;
    }
}

// Variables to store instance of the main bank branch
const bankBranchInstance = new BankBranch({ name: "Main Branch", location: "City Center" });

// Instances of the  class "BankBranch" with different branch information
const branchA = new BankBranch({ name: "Branch A", location: "Johannesburg" });  //"Branch A" is located in "Johannesburg"
const branchB = new BankBranch({ name: "Branch B", location: "Rustenburg" }); //"Branch B" is located in "Rustenburg"

// Retrieving branch information from the instances using "getBranchInfo", output for both should be { name: "Main Branch", location: "City Center" }
console.log(branchA.getBranchInfo()); 
console.log(branchB.getBranchInfo());  

// Verifying that `branchA` and `branchB` are both referring to the same instance using "===" (true/false)
console.log(branchA === branchB); // Output: true