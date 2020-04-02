<?php
namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        
        return new ViewModel();
    }
    public function findingAction()
    {
        $word=['X', 'Y', '5', '9', '15', '23', 'Z'];

        return new ViewModel();
    }
    public function calculateAction($a)
    {
        print($a);
        $b = $a+2;
        $c = $a-42;
       
        $data =["a"=>$a,"b"=>$b,"c"=>$c];
        return new JsonModel($data);
    }
}
