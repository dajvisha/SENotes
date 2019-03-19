package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type Person struct {
	fName string
	lName string
}

func main() {
	var fileName string
	var persons []Person

	fmt.Print("Enters a file name: ")
	fmt.Scan(&fileName)

	file, errReadingFile := os.Open(fileName)

	if errReadingFile != nil {
		fmt.Println(errReadingFile)
	}

	reader := bufio.NewScanner(file)
	reader.Split(bufio.ScanLines)

	for reader.Scan() {
		line := reader.Text()
		lineData := strings.Split(line, " ")
		person := Person{
			fName: lineData[0],
			lName: lineData[1],
		}
		persons = append(persons, person)
	}

	file.Close()

	for index, person := range persons {
		personInfo := fmt.Sprintf("%d - fName: %s, lName: %s", index+1, person.fName, person.lName)
		fmt.Println(personInfo)
	}
}
