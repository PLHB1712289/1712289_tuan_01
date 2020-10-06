echo "==================="
echo "= AUTO DEPLOY APP ="
echo "===================" 

# build app
npm run deploy

# commit & push github
git add .
git commit -m "deploy app"
git push

echo "Done!!"
