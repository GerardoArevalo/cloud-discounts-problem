# cloud-discounts-problem

Problem

The Ingram Micro Marketplace is selling seven different cloud services. The license of each service has a standard price of $8.00. However, if you buy more than one of the services at a time, you get a discount. Buying multiple licenses of the same service does not earn a discount.

Number of Different Services Discount Percentage
· 2 -> 5%
· 3 ->10%
· 4 -> 15%
· 5 -> 25%
· 6 -> 30%
· 7 -> 35%

Write a method that will calculate the optimal customer discount for any set of licenses from this services. Keep in mind that larger percentages are not always better as can be seen in the sample below, in which case it was better to keep all the services at 75% discount instead of having some at 70% and others at 85% of retail.

Indications

Run node calculateDiscounts.js