<?php
namespace Doscg\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
class IndexController extends AbstractActionController
{
    public function indexAction()
    {    
        return new ViewModel();
    }
    public function mapAction()
    {
        return new ViewModel();
    }
    public function calculateAction()
    {
        $a = $_GET["input_a"];
        $b = $a+2;
        $c = $a-42;
       
        $data =["a"=>$a,"b"=>$b,"c"=>$c];
        return new JsonModel($data);
      
    }
    public function getJsonAction()
    {
        return new JsonModel([
            'status' => 'SUCCESS',
            'message'=>'Here is your data',
            'data' => [
                'full_name' => 'John Doe',
                'address' => '51 Middle st.'
            ]
        ]);
    }
    public function chatAction()
    {
        return new ViewModel();
    }
}
