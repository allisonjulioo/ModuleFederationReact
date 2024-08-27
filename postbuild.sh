#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Clear build path
if [ -d "build" ]; then
  echo "Removing existing 'build' directory..."
  rm -rf build
fi

echo "Creating 'build' directory..."
mkdir -p build

# Copy container to root build folder
echo "Copying container files to 'build'..."
cp -r ./container/dist/* ./build/

# Define the directories as an array
folders=("cart" "success" "list")

# Loop through each directory in the array
for folder in "${folders[@]}"; do
    echo "Creating directory and copying files to 'build/$folder/'..."
    mkdir -p "./build/$folder/"
    cp -r ./"$folder"/dist/* "./build/$folder/"
done

echo "'build' directory created successfully."
