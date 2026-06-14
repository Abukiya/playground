# Python recap 2
# This file expands the first recap with booleans, operators, and core collections.

# -------------------------------------------------
# Boolean values and truthiness
# -------------------------------------------------
print("Boolean comparisons:")
print("10 > 9 ->", 10 > 9)
print("10 == 9 ->", 10 == 9)
print("10 < 9 ->", 10 < 9)

print("\nTruthy and falsy values:")
print('bool("abc") ->', bool("abc"))
print("bool(123) ->", bool(123))
print("bool(['apple', 'cherry', 'banana']) ->", bool(["apple", "cherry", "banana"]))
print("bool(False) ->", bool(False))
print("bool(None) ->", bool(None))
print("bool(0) ->", bool(0))
print('bool("") ->', bool(""))
print("bool(()) ->", bool(()))
print("bool([]) ->", bool([]))
print("bool({}) ->", bool({}))

# -------------------------------------------------
# Python operators
# -------------------------------------------------
first_number = 10
second_number = 3

print("\nArithmetic operators:")
print("Addition:", first_number + second_number)
print("Subtraction:", first_number - second_number)
print("Multiplication:", first_number * second_number)
print("Division:", first_number / second_number)
print("Floor division:", first_number // second_number)
print("Modulus:", first_number % second_number)
print("Exponentiation:", first_number ** second_number)

print("\nComparison operators:")
print("Equal:", first_number == second_number)
print("Not equal:", first_number != second_number)
print("Greater than:", first_number > second_number)
print("Less than or equal:", first_number <= second_number)

print("\nLogical operators:")
is_adult = True
has_id = False
print("and:", is_adult and has_id)
print("or:", is_adult or has_id)
print("not:", not has_id)

print("\nMembership operators:")
fruits = ["apple", "banana", "cherry"]
print('"banana" in fruits ->', "banana" in fruits)
print('"mango" not in fruits ->', "mango" not in fruits)

print("\nIdentity operators:")
first_list = [1, 2, 3]
second_list = first_list
third_list = [1, 2, 3]
print("first_list is second_list ->", first_list is second_list)
print("first_list is third_list ->", first_list is third_list)
print("first_list == third_list ->", first_list == third_list)

# -------------------------------------------------
# Lists
# -------------------------------------------------
print("\nLists:")
numbers = [1, 2, 3]
numbers.append(4)
numbers.insert(1, 99)
print("Updated list:", numbers)
print("First item:", numbers[0])
print("Last item:", numbers[-1])
print("Slice:", numbers[1:3])

# -------------------------------------------------
# Tuples
# -------------------------------------------------
print("\nTuples:")
coordinates = (10, 20)
latitude, longitude = coordinates
print("Coordinates:", coordinates)
print("Unpacked values:", latitude, longitude)

# -------------------------------------------------
# Sets
# -------------------------------------------------
print("\nSets:")
unique_numbers = {1, 2, 2, 3, 4}
unique_numbers.add(5)
print("Set contents:", unique_numbers)
print("Union:", unique_numbers.union({6, 7}))
print("Intersection:", unique_numbers.intersection({3, 4, 8}))

# -------------------------------------------------
# Dictionaries
# -------------------------------------------------
print("\nDictionaries:")
student = {
	"name": "Amina",
	"age": 20,
	"course": "Python basics",
}
print("Student name:", student["name"])
print("All keys:", list(student.keys()))
student["passed"] = True
print("Updated dictionary:", student)

# -------------------------------------------------
# If / elif / else
# -------------------------------------------------
print("\nConditional example:")
score = 82
if score >= 90:
	print("Grade: A")
elif score >= 80:
	print("Grade: B")
else:
	print("Grade: C")

# -------------------------------------------------
# Loop examples
# -------------------------------------------------
print("\nFor loop:")
for fruit in fruits:
	print("-", fruit)

print("\nWhile loop:")
counter = 1
while counter <= 3:
	print("counter =", counter)
	counter += 1

# -------------------------------------------------
# Functions
# -------------------------------------------------
def greet(name):
	"""Return a short greeting message."""
	return f"Hello, {name}!"


print("\nFunction example:")
print(greet("student"))


