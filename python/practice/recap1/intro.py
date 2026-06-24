# Intro to Python
print("Hello, World!")

# -------------------------------------------------
# Variables
# -------------------------------------------------
# A variable stores a value so you can reuse it later.
x = 5
print("x =", x)

# You can assign multiple values in one line.
y, z = 10, 20
print("y =", y)
print("z =", z)

# -------------------------------------------------
# Unpacking a collection
# -------------------------------------------------
# The number of variables must match the number of values.
fruits = ["apple", "banana", "cherry"]
a, b, c = fruits
print("Unpacked fruits:", a, b, c)

# -------------------------------------------------
# Printing multiple variables
# -------------------------------------------------
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)
print(x + " " + y + " " + z)

# Different types can be printed together using commas.
x = 5
y = "John"
print("Mixed values:", x, y)

# -------------------------------------------------
# Global variables
# -------------------------------------------------
# A variable defined outside a function is global.
x = "awesome"


def myfunc():
  # This x is local to the function.
  x = "fantastic"
  print("Python is " + x)


myfunc()
print(x)

# -------------------------------------------------
# The global keyword
# -------------------------------------------------
# Use global when you want to change a variable outside a function.


def myfunc_global():
  global x
  x = "fantastic"


myfunc_global()
print("Python is " + x)

# -------------------------------------------------
# Python data types
# -------------------------------------------------
# Common built-in types with simple examples.
int_var = 42
float_var = 3.14
complex_var = 2 + 3j
str_var = "hello"
bool_var = True
list_var = [1, 2, 3]
tuple_var = (1, 2, 3)
set_var = {1, 2, 3}
frozenset_var = frozenset({1, 2, 3})
dict_var = {"a": 1, "b": 2}
none_var = None
bytes_var = b"abc"
bytearray_var = bytearray(b"abc")
range_var = range(5)

examples = [
  ("int", int_var),
  ("float", float_var),
  ("complex", complex_var),
  ("str", str_var),
  ("bool", bool_var),
  ("list", list_var),
  ("tuple", tuple_var),
  ("set", set_var),
  ("frozenset", frozenset_var),
  ("dict", dict_var),
  ("NoneType", none_var),
  ("bytes", bytes_var),
  ("bytearray", bytearray_var),
  ("range", range_var),
]

print("\nPython data type examples:")
for name, value in examples:
  print(f"- {name}: {value!r} (type: {type(value).__name__})")

# -------------------------------------------------
# Numbers
# -------------------------------------------------
# Python has three numeric types: int, float, and complex.
x = 1    # int
y = 2.8  # float
z = 1j   # complex

print("\nNumbers:")
print("x =", x, type(x).__name__)
print("y =", y, type(y).__name__)
print("z =", z, type(z).__name__)

# Convert from one number type to another.
a = float(x)      # int -> float
b = int(y)        # float -> int
c = complex(x)    # int -> complex

print("Converted values:")
print(a)
print(b)
print(c)
print(type(a))
print(type(b))
print(type(c))

# Note: You cannot convert complex numbers directly into int or float.

# -------------------------------------------------
# Random numbers
# -------------------------------------------------
import random

# randrange() returns a random number from the given range.
print("\nRandom number from 1 to 9:", random.randrange(1, 10))

# -------------------------------------------------
# Strings
# -------------------------------------------------
first_name = "Hello"
print(first_name)

# Triple quotes allow multiline strings.
multiline_text = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(multiline_text)

# -------------------------------------------------
# String slicing
# -------------------------------------------------
text = "Hello, World!"
print(text[2:5])
print(text[-5:-2])
print(text[::-1])  # Reverse the string

# -------------------------------------------------
# Concatenating strings
# -------------------------------------------------
greeting = "Hello"
target = "World"
message = greeting + ", " + target + "!"
print(message)

# -------------------------------------------------
# Format strings
# -------------------------------------------------
name = "Amina"
age = 20
print(f"{name} is {age} years old.")

# You can also use .format() when you want positional formatting.
print("{} is {} years old.".format(name, age))

# -------------------------------------------------
# Escape characters
# -------------------------------------------------
# Backslash lets you use special characters inside strings.
escaped_text = "She said, \"Python is fun!\""
print(escaped_text)
print("First line\nSecond line")
print("Tab\tseparated")

# -------------------------------------------------
# Common string methods
# -------------------------------------------------
sample = "  hello, python world  "
print(sample.strip())
print(sample.upper())
print(sample.lower())
print(sample.replace("python", "Python"))
print(sample.split())

# A few more useful examples.
print("hello".capitalize())
print("hello".count("l"))
print("hello".find("l"))
