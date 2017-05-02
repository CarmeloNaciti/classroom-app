<?php

namespace PersonBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as REST;
use PersonBundle\Form\Type\PersonType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * @REST\NamePrefix("api_")
 */
class DefaultController extends FOSRestController
{
    /**
     * @param Request $request
     *
     * @return Response
     *
     * @REST\Get("/person/view")
     */
    public function viewAction(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository('PersonBundle:Person');

        return $this->handleView($this->view($repository->findAll()));
    }

    /**
     * @param int     $id
     * @param Request $request
     *
     * @return Response
     *
     * @REST\Get("person/{id}")
     */
    public function getPersonByIdAction(int $id, Request $request)
    {
        $repository = $this->getDoctrine()->getRepository('PersonBundle:Person');

        return $this->handleView($this->view($repository->find($id)));
    }

    /**
     * @param int     $id
     * @param Request $request
     *
     * @return Response
     *
     * @REST\Put("person/update/{id}")
     */
    public function updatePersonByIdAction(int $id, Request $request)
    {
        $tmp = new \stdClass();
        $tmp->id_person = 2;
        $tmp->name = 'Rene';
        $tmp->surname = 'Naciti';
        $request->request->add([json_encode($tmp)]);

        dump($request);

        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('PersonBundle:Person')->find($id);
        $form = $this->createForm(PersonType::class, $entity);

        $form->handleRequest($request);

        if ($form->isValid()) {

            $em->persist($entity);
            $em->flush();

            return $this->handleView($this->view('SUCCESS'));
        }

        return $this->handleView($this->view('FAILURE'));
    }
}
