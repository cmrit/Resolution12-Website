<?php
	class entries{
		
		private $id,$name,$college,$status;
		
		public function create($stu_college,$stu_name){
			$stu_college=mysql_real_escape_string($stu_college);
			$c=count($stu_name);
			$q="INSERT INTO entries(name,college) VALUES ";
			for($i=0;$i<$c;$i++){
				if(trim($stu_name[$i]!='')){
					$a=mysql_real_escape_string($stu_name[$i]);
					$q=$q."('$stu_college','$a'),";
				}
			}
			$q=substr($q,0,-1);
			if(mysql_query($q))
				return true;
			return false;
		}
	}
?>
