echo "==================="
echo "= AUTO DEPLOY APP ="
echo "===================" 

npm run deploy
git add .
git commit -m "deploy app"
git push

echo "Done!!"
