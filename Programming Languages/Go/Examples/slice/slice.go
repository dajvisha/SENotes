package main

import (
	"fmt"
	"sort"
	"strconv"
)

func main() {
	fmt.Println("Enter integer numbers or enter 'X' to exit.")

	var input string
	numbersSlice := make([]int, 0, 3)

	for {
		fmt.Print("Enter an integer: ")
		fmt.Scan(&input)
		num, err := strconv.Atoi(input)

		if err != nil {
			if input == "X" {
				break
			}
			fmt.Println("An integer number is expected.")
			continue
		}

		numbersSlice = append(numbersSlice, num)
		sort.Ints(numbersSlice)

		fmt.Println(numbersSlice)
	}
}
