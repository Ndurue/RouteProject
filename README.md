# RouteProject
 Project to get familiarized with routing in vue

 # To update the docs folder using git so your changes can reflect on your github website
 # Rebuild the project
npm run build

# Clear the existing docs folder
rm -rf docs/*

# Move the new build files to the docs folder
mv dist/* docs/

# Commit and push the changes
git add docs
git commit -m "Deploy updated build to GitHub Pages"
git push origin main

