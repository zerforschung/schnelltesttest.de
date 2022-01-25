#!/bin/bash

# get all locale files and put them into an array
IFS=$'\n'
LOCALE_FILES=($(ls src/locale/*.json))
unset IFS

# variable to store all the diverging keys
DIFF=""

# read in all the keys of the first file as a reference
REFERENCE_KEYS=$(cat "${LOCALE_FILES[0]}" | jq 'keys[]');

# iterate over the array of locale files
for localeFile in "${LOCALE_FILES[@]}"; do
  # read in all locale keys of the current file and compare them with the reference keys
  # generate a list of all keys that are only in the first or second file (column 1 and 2 in `comm`s output)
  DIFF+=$(comm -3 <(cat $localeFile | jq 'keys[]') <(echo -e "$REFERENCE_KEYS"))
done

# remove all whitespace (due to `comm`s table layout) and output all diverging locale keys (as a multiline string)
echo -e "$DIFF" | awk '{$1=$1};1' | sort | uniq
