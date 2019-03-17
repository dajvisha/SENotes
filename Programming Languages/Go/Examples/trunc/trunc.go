package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	var number float32

	fmt.Printf("Enter a floating point number: ")

	if _, err := fmt.Scan(&number); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	numberInt := int(number)
	numberStr := strconv.Itoa(numberInt)

	fmt.Printf(numberStr + "\n")
}
