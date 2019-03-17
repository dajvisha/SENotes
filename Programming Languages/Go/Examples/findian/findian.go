package main

import (
	"fmt"
	"os"
	"strings"
)

func findian(word string) bool {
	word = strings.ToLower(word)

	startsI := strings.HasPrefix(word, "i")
	endsN := strings.HasSuffix(word, "n")
	containsA := strings.Contains(word, "a")

	return startsI && endsN && containsA
}

func main() {
	var word string

	fmt.Print("Enter a word: ")

	if _, err := fmt.Scan(&word); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	switch findian(word) {
	case true:
		fmt.Print("Found!\n")
	default:
		fmt.Print("Not Found!\n")
	}
}
