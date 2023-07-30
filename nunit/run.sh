#!/bin/bash
<<<<<<< HEAD
<<<<<<< HEAD
cp -r /home/coder/project/workspace/nunit/test/WebAppTest /home/coder/project/workspace/dotnetapp;
cd /home/coder/project/workspace/dotnetapp;
dotnet test
=======
=======
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
if [ -d "/home/coder/project/workspace/dotnetapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/dotnetapp/" ]
    then
        cp -r /home/coder/project/workspace/nunit/test/TestProject /home/coder/project/workspace/dotnetapp/;
    cd /home/coder/project/workspace/dotnetapp/TestProject || exit;
     dotnet clean;    
     dotnet test;
    else
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
	    echo "test_case3 FAILED";
    fi
else   
    echo "test_case1 FAILED";
    echo "test_case2 FAILED";
    echo "test_case3 FAILED";
<<<<<<< HEAD
fi
>>>>>>> b6adfd06dc27dcd0c9a7ff899bb753362eb4ab12
=======
fi
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
