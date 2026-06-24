"""Practice file for common Python list operations."""


def show(title: str) -> None:
    print(f"\n{title}")
    print("-" * len(title))


show("Create and access")
fruits = ["apple", "banana", "cherry"]
print(fruits[1])
print(fruits[-1])
print(fruits[1:3])

show("Update and insert")
fruits = ["apple", "banana", "cherry"]
fruits[1] = "blackcurrant"
print(fruits)

fruits.insert(2, "watermelon")
print(fruits)

show("Add items")
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)

tropical_fruits = ["mango", "pineapple", "papaya"]
fruits.extend(tropical_fruits)
print(fruits)

fruits.insert(1, "kiwi")
print(fruits)

show("Remove items")
fruits = ["apple", "banana", "cherry", "orange"]
fruits.remove("banana")
print(fruits)

removed_item = fruits.pop(1)
print(removed_item)
print(fruits)

del fruits[0]
print(fruits)

fruits.clear()
print(fruits)

show("Loop through a list")
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

for index in range(len(fruits)):
    print(fruits[index])

show("List comprehension")
fruits = ["apple", "banana", "cherry"]
filtered_fruits = [fruit for fruit in fruits if "a" in fruit]
print(filtered_fruits)

show("Sort and reverse")
numbers = [3, 1, 4, 2]
numbers.sort()
print(numbers)

numbers.sort(reverse=True)
print(numbers)

names = ["Banana", "apple", "cherry"]
names.sort(key=str.lower)
print(names)

names.reverse()
print(names)

show("Copy and join")
first_list = ["a", "b", "c"]
second_list = [1, 2, 3]

copied_list = first_list.copy()
combined_list = first_list + second_list

print(copied_list)
print(combined_list)
