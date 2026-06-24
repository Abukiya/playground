"""Practice file for common Python set operations."""


def print_section(title: str) -> None:
  print(f"\n{title}")
  print("-" * len(title))


def basic_set_operations() -> None:
  print_section("Basic operations")

  fruits = {"apple", "banana", "cherry"}
  print("Original set:", fruits)

  print("Looping through the set:")
  for fruit in fruits:
    print(fruit)

  fruits.add("orange")
  print("After add():", fruits)

  fruits.update(["mango", "grapes"])
  print("After update():", fruits)

  fruits.remove("banana")
  print("After remove():", fruits)

  fruits.discard("banana")
  print("After discard() with a missing item:", fruits)

  removed_item = fruits.pop()
  print("pop() removed:", removed_item)
  print("After pop():", fruits)

  fruits.clear()
  print("After clear():", fruits)


def set_comprehension_example() -> None:
  print_section("Set comprehension")

  squares = {number * number for number in range(10)}
  print("Squares from 0 to 9:", squares)


def joining_sets() -> None:
  print_section("Joining sets")

  letters = {"a", "b", "c"}
  numbers = {1, 2, 3}

  union_result = letters.union(numbers)
  print("union():", union_result)

  letters_copy = {"a", "b", "c"}
  letters_copy.update(numbers)
  print("update():", letters_copy)


def set_comparisons() -> None:
  print_section("Set comparisons")

  left = {"apple", "banana", "cherry"}
  right = {"google", "microsoft", "apple"}

  intersection_result = left.intersection(right)
  print("intersection():", intersection_result)

  left_copy = {"apple", "banana", "cherry"}
  left_copy.intersection_update(right)
  print("intersection_update():", left_copy)

  difference_result = left.difference(right)
  print("difference():", difference_result)

  left_copy = {"apple", "banana", "cherry"}
  left_copy.difference_update(right)
  print("difference_update():", left_copy)

  symmetric_difference_result = left.symmetric_difference(right)
  print("symmetric_difference():", symmetric_difference_result)

  left_copy = {"apple", "banana", "cherry"}
  left_copy.symmetric_difference_update(right)
  print("symmetric_difference_update():", left_copy)


def frozen_set_example() -> None:
  print_section("Frozen set")

  frozen_numbers = frozenset([1, 2, 3, 4])
  print("frozenset:", frozen_numbers)


def main() -> None:
  basic_set_operations()
  set_comprehension_example()
  joining_sets()
  set_comparisons()
  frozen_set_example()


if __name__ == "__main__":
  main()