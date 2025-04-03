def vote_eligible(a):     #func for check eligible
    if a >=18:
        return "You Are Eligible To Vote"
    else:
        return "You Are Not Eligible To Vote"



age = int(input("Enter Your Age : "))  #get input from user
result = vote_eligible(age)
print(result)
