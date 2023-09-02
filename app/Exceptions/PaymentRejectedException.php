<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Client\Response as HttpClienteResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PaymentRejectedException extends Exception
{
    private $response;

    public function __construct(HttpClienteResponse $response)
    {
        $this->response = $response;
    }

    /**
     * Get the exception's context information.
     *
     * @return array<string, mixed>
     */
    public function context(): array
    {
        return ['response' => $this->response];
    }

    /**
     * Render the exception into an HTTP response.
     */
    public function render(Request $request): Response
    {
        return response('El pago fue rechazado.', 402);
    }
}
