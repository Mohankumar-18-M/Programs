l1 = [1,2,3,4]     #initialize list
l2 = []            #create empty list and add values
l2.extend([2,3,4])
l3 = []            #create empty list and add values dynamically
l3.append(3)
l3.append(5)
l3.append(7)


print("Element and their index in list 1")    #print list1
for index, item in enumerate(l1):
    print(f"Index:{index},Value: {item}")

print("\nElement and their index in list 2")   #print list2
for index, item in enumerate(l2):
    print(f"Index:{index},Value: {item}")

print("\nElement and their index in list 3")   #print  list3
for index, item in enumerate(l3):
    print(f"Index:{index},Value: {item}")

print("\nLength of List1:",len(l1))            #print len of l1,l2,l3
print("\nLength of List2:",len(l2))
print("\nLength of List3:",len(l3))
