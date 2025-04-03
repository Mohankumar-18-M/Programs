def check_prime(n):                 #print prime num
    for i in range(3,n,1):
        c=0
        for j in range(1,i+1,1):
            if(i%j == 0):
                c= c+1
        if(c==2):
            print(i)




ln = int(input("Enter the limit: "))             #get limit
c=0
print("Prime numbers upto ",ln,"are:")
print(2)
check_prime(ln)
